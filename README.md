## About

Image carousel with upload functionality. Developed with Next.js and Supabase (for storing and retrieving images)

## Upcoming features

- Pause and resume functionality for uploads
- A configurable stylesheet to override the MUI theme for dark mode support
- Show skeleton while the images are being loaded
- Uploading progress indicator for individual images
- Delete images as supabase free plan offers limited storage (500 MB)

## Explanations

Initially, i did hit the api endpoints /images and /upload created using route handlers. It was workig fine locally, but during deployment there were errors because server dont have access to baseUrl. So, finally i used server actions.\
Also revalidating cache was not working properly with fetch.

I have put the route handlers code in the branch "with-api-routes", if you want to checkout.
