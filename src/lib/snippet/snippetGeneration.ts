import { toBlob, toJpeg, toPng, toSvg } from 'html-to-image';
import type { Options } from 'html-to-image/lib/options';

import type { BackgroundCustomization, ExportCustomization } from 'snappy.types';
import { BackgroundType, FileExtension } from 'snappy.types';

/**
 * Generates the actual image using the correct quality and styling.
 */
export const handleImageGeneration = async (
  exportRef: HTMLDivElement,
  exportSettings: ExportCustomization,
  backgroundSettings: BackgroundCustomization
) => {
  if (exportRef === null) {
    return;
  }
  const width = exportRef.offsetWidth;
  const height = exportRef.offsetHeight;
  const quality = exportSettings.sizeMultiplier;
  const extension = exportSettings.fileExtension;

  const styles: Partial<CSSStyleDeclaration> = {
    transformOrigin: 'top left',
    backgroundOrigin: 'border-box',
    backgroundSize: 'cover',
    backgroundPosition: '0% 0%',
  };

  if (backgroundSettings.backgroundType === BackgroundType.IMAGE) {
    styles.backgroundImage = `url(${backgroundSettings.backgroundImage})`;
  } else if (backgroundSettings.backgroundType === BackgroundType.GRADIENT && backgroundSettings.backgroundGradient) {
    styles.backgroundColor = backgroundSettings.backgroundGradient?.generated;
  } else if (backgroundSettings.backgroundType === BackgroundType.COLOR && backgroundSettings.backgroundColor) {
    styles.backgroundColor = `rgb(${backgroundSettings.backgroundColor.r}, ${backgroundSettings.backgroundColor.g}, ${backgroundSettings.backgroundColor.b})`;
  }

  const OPTIONS: Options = {
    style: styles,
    filter: (n) => {
      if (n.className) {
        const className = String(n.className);
        if (className.includes('eliminateOnRender')) {
          return false;
        }
        if (className.includes('CodeMirror-cursors')) {
          return false;
        }
      }
      return true;
    },
    quality,
    width,
    height,
  };

  // PNG
  if (extension === FileExtension.PNG) {
    return toPng(exportRef, OPTIONS);
  }
  // SVG
  if (extension === FileExtension.SVG) {
    return toSvg(exportRef, OPTIONS);
  }
  // JPEG
  if (extension === FileExtension.JPEG) {
    return toJpeg(exportRef, OPTIONS);
  }
  // BLOB
  if (extension === FileExtension.BLOB) {
    return toBlob(exportRef, OPTIONS);
  }
};

/**
 * Tries to create an a element for the image and click it to trigger the download.
 * @param extension extension of the file.
 * @param dataUrl url from the generated image.
 */
export const saveImageToFile = (extension: FileExtension, dataUrl: string | Blob): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const link = document.createElement('a');
      const NAME = 'snappy';
      link.download = `${NAME}.${extension}`;
      link.href = dataUrl as string;
      link.click();
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Asks for permission and creates the clipboard object with the image data and then tries to copy it to the clipboard.
 * @param dataUrl url from the generated image.
 * @returns a promise containing the result of the copy operation.
 */
export const copyImageToClipboard = async (dataUrl: string | Blob): Promise<void> => {
  const IS_FIREFOX = !(navigator.userAgent.indexOf('Firefox') < 0);
  if (!IS_FIREFOX) {
    navigator.permissions
      // @ts-ignore
      .query({ name: 'clipboard-write' })
      .then(async (result) => {
        if (result.state === 'granted') {
          const type = 'image/png';
          const data = [new ClipboardItem({ [type]: dataUrl })];
          return navigator.clipboard.write(data);
        }
      });
  }
};

/**
 *
 * @param dataUrl url from the generated image.
 * @returns a promise containing the result of the open operation.
 */
export const openImageInBrowser = (dataUrl: Blob | string): Promise<void> => {
  return new Promise((resolve, reject) => {
    try {
      const data = window.URL.createObjectURL(dataUrl as Blob);
      const link = document.createElement('a');
      link.href = data as string;
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      link.remove();
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};
