import { RichText } from 'prismic-reactjs'

const MyAwesomeCallToAction = ({ slice }) => (
  <div>
    <RichText render={slice.primary.title} />
    <RichText render={slice.primary.paragraph} />
  </div>
)

export default MyAwesomeCallToAction