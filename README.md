# DJ Jpizzle Site

Simple under-construction page for GitHub Pages with a JSON-driven gallery.

## Files

- `index.html` - Main page
- `styles.css` - Styles
- `media.json` - Photo/video source list for gallery
- `assets/photos/` - Place image files here
- `assets/videos/` - Place video files here

## Add media

Edit `media.json` and add entries to the `media` array.

Image example:

```json
{
  "type": "image",
  "src": "assets/photos/my-photo.jpg",
  "alt": "Crowd shot"
}
```

Video example:

```json
{
  "type": "video",
  "src": "assets/videos/my-video.mp4",
  "poster": "assets/photos/video-cover.jpg",
  "title": "Live set clip"
}
```

## Publish on GitHub Pages

1. Push this project to a GitHub repository.
2. In GitHub, open repository **Settings** > **Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select branch **main** and folder **/(root)**, then save.
5. Wait for deployment, then open the Pages URL shown in settings.

## Notes

- Keep `index.html` in the repository root for simplest Pages setup.
- Use relative paths in `media.json` (already configured).
