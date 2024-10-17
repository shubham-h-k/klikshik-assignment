## Upcoming features

- Responsive design
- Show skeleton while the images are being loaded
- Uploading progress indicator for individual images
- Delete images because supabase free plan offers limited storage (500 MB)

## Explanations

Initially, i did hit the api endpoints /images and /upload created using route handlers. It was workig fine locally, but during deployment there were errors because server dont have access to baseUrl. So, finally i used server actions.\
Also revalidating cache was not working properly with fetch.

I have put the route handlers code in the branch "with-api-routes", if you want to checkout.
