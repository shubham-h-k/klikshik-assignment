## Upcoming features

- Responsive design
- Show skeleton while the images are being loaded
- Uploading progress indicator for individual images
- Delete images because supabase free plan offers limited storage (500 MB)

## Explanation

Data could have been fetched directly in the Page(server) component, and images could have been uploaded using server actions, but the assignment specifically asked for hitting the api endpoint /images and /upload, so route handlers are created in the directory src/app/api
