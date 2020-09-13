const alfy = require('alfy')
const reader = require( 'chrome-bookmark-reader')

const path = process.env.BOOKMARK_PATH;
const data = reader.getChromeBookmark(path)

const mapToItem = (bookmark) => {
  return {
    title: bookmark.name,
    subtitle: bookmark.url,
    arg: bookmark.url,
    icon: {
      type: 'png',
      path: 'icon.png',
    }
  }
}

const items = alfy
  .inputMatches(data, 'name')
  .map(element => mapToItem(element))

alfy.output(items)
