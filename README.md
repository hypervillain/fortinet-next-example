This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

### What I did

I bootstrapped a SliceMachine project (canary version of Prismic) running:

```bash
npx prismic-cli@beta sm --setup
````

I then went to my Prismic dashboard and opened the newly created repo.
Inside my Documents page, I created a doc of type `Page`, with uid `my-page`.

I copy-pasted [this code](https://www.slicemachine.dev/documentation/next/next-slicezone) to `/pages/[uid].js`, ran `yarn dev` and accessed `localhost:3000/my-page`.

Then, I enjoyed 👍

Read `slices/CallToAction` to understand how to create your own slices. They will be automatically mapped by the SliceZone (api: 'my_slice', code: 'MySlice')

### What is left to do

- add [preview code](https://github.com/vercel/next.js/tree/canary/examples/cms-prismic/pages/api) at `/pages/api/preview.js`
- update your Prismic repository so that clicking "Preview" correctly redirects there

Cheers!
