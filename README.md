# slidev-theme-onecraft

[![NPM version](https://img.shields.io/npm/v/slidev-theme-onecraft?color=3AB9D4&label=)](https://www.npmjs.com/package/slidev-theme-onecraft)

A Capgemini Onecraft theme for [Slidev](https://github.com/slidevjs/slidev) by [Yohann Ciurlik](https://github.com/spawnrider).

<!--
  Learn more about how to write a theme:
  https://sli.dev/guide/write-theme.html
--->

<!--
  run `npm run dev` to check out the slides for more details of how to start writing a theme
-->

<!--
  Put some screenshots here to demonstrate your theme

  Live demo: [...]
-->

## Usage

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>onecraft</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Example
- See [PDF exported version](./example.pdf)
- See [sample implementation](https://gist.github.com/spawnrider/6ad434f8526e6b0a3993c47b729581b0)

## Layouts

The theme currently has the following layouts:

- default
- cover
- center
- section
- two-cols
- about-me
- and the ones from Slidev itself

### Header and footer
By default any layout will not contain a header and a footer

But you can add this properties to add header and footer
```
---
themeConfig:
  logoHeader: 'logo_onecraft_fond_blanc.png' 
  footerLeft: 'Onecraft software expertise - Template Slidev - Avril 2025'
  footerRight: 'Capgemini 2025. All rights reserved'
---
```
Note that logos are located in the *'public/logos'* folder.

#### Preview
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/20.png)

### Cover
Usage:
- Add `cover` in the layout field
- Specify the `logo' to show. Choose between :
  - logo_onecraft_fond_blanc.png, 
  - logo_onecraft_fond_couleur.png, 
  - logo_onecraft_noir.png 
  - or any other logo you want
- Specify the background you want. Various options : 
  - Use one of the 17 embedded backgrounds,
  - Specify a color using `#272936` or `rgb(x,y,z)` value
  - Use custom background from your own folder or an URL

```
---
layout: cover
logo: 'logo_onecraft_fond_couleur.png'
background: "background8.jpeg"
---
```
Preview:
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/1.png)
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/2.png)
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/3.png)
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/4.png)
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/5.png)

### Agenda
It's not a specific layout but you can use the `image-right` layout to create a quick agenda

```
---
layout: image-right
image: 'bulb.jpg'
---
```
Preview:
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/6.png)


### Presenter
Usage: 
- Use the `presenter` layout 
- Specify your avatar using the `presenterImage` option

```
---
layout: 'presenter'
presenterImage: 'https://avatars.githubusercontent.com/u/107427?v=4'
--- 
```
Preview:
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/7.png)

### New Section
Usage: 
- Use the `new-section` layout to switch to create a section

```
---
layout: new-section
---
```
Preview:
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/15.png)

### Text & Image
Usage :
- Use `text-image` layout
- USe the `media` property to specify the image to show
- Optionaly, use the `reverse` option 
- Add a caption on the image using `caption`

```
---
layout: text-image
media: 'https://media.giphy.com/media/VkMV9TldsPd28/giphy.gif'
reverse: false
caption: 'It''s incredible'
---
``` 
Preview:
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/13.png)


### Text & Window
Usage :
- Use `text-window` layout
- Optionaly, use the `reverse` option 
- Use `::window::` on the content to specify where you want to place the window content (see example.md)

```
---
layout: text-window
reverse: true
---
```

Preview:
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/18.png)

### Two columns
Usage :
- Use `two-cols` layout
- Use `::right::` on the content to specify the content to put on the right side

```
---
layout: two-cols
---
```

Preview:
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/16.png)

### Two thirds
Usage :
- Use `two-thirds` layout
- Use `::right::` on the content to specify the content to put on the right side

```
---
layout: two-thirds
---
```

Preview:
![alt text](https://github.com/spawnrider/slidev-theme-onecraft/blob/master/example-export/17.png)

### Others layouts / samples
See the `example-export` folder or [example.md](example.md) to find others layouts or samples.

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG

## Thanks to 
- [Slidev](https://sli.dev/) for this awesome presentation tool for devs
- Alvaro Saburido for the [Penguin theme](https://github.com/alvarosabu/slidev-theme-penguin/)
- Elio Struyf for [The Unamed theme](https://github.com/estruyf/slidev-theme-the-unnamed)
