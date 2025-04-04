import type { CSSProperties } from 'vue'

const backgroundFolder = '/backgrounds/';

/**
 * Resolve urls from frontmatter and append with the base url
 */
export function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

export function handleBackground(background?: string, dim = false): CSSProperties {
  const isColor = background && (background[0] === '#' || background.startsWith('rgb'))

  console.log("background", background);
  console.log("isColor", isColor);

  const style = {
    background: isColor
      ? background + ' !important'
      : undefined,
    color: (background && !isColor)
      ? 'white'
      : undefined,
    backgroundImage: isColor
      ? undefined
      : background
        ? dim
          ? `linear-gradient(#0005, #0008), url("${resolveAssetUrl(backgroundFolder + background)}")`
          : `url("${resolveAssetUrl(backgroundFolder + background)}")`
        : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  if(!style.backgroundImage)
    delete style.backgroundImage

  if (!style.background)
    delete style.background

  console.log("style", style);

  return style
}