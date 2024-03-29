# Practice Code Online
_React front end to practice code assignments online._

[![wercker status](https://app.wercker.com/status/7d7100cfda032403bb3aaa0880b58922/s/master "wercker status")](https://app.wercker.com/project/byKey/7d7100cfda032403bb3aaa0880b58922)

At [Codaisseur][codaisseur], we focus mostly on classroom learning to teach
people code because of the high levels of quality and support that we can give
students when we are physically present. Still, we decided to start building
this online learning experience together with some of our grads.

## Practice Makes Perfect

Learning about code, algorithms, software architecture, frameworks, 100's of
libraries in a short time is demanding and rewarding, but in the end it also
comes down to spending those 10K hours on writing code to become a craftsperson.

This project will provide a place to practice.

## Development

To run this project do the following.

To run the API:

```bash
# Remove your local node_modules if they exist
rm -rf node_modules

# Install dependencies with Docker
docker-compose up install

# Start the dev server and API and the test watcher
docker-compose up dev test

# Open the app in your browser
open http://localhost:3000
```

This will start the Feathers API and a Mongodb container.

## Testing

We use [Mocha](https://mochajs.org/), [Chai](http://chaijs.com/), and [Enzyme](http://airbnb.io/enzyme/docs/api/index.html) to test components.

### Running the tests

During development, you'll want to be watching for changes and
rerunning the tests on file changes:

```
docker-compose up test
```

### Writing tests

A typical test imports the following, but you might not need everything every
time:

```js
// React and Chai
import React from 'react'
import chai, { expect } from 'chai'
// Instruct Chai to use Enzyme
import chaiEnzyme from 'chai-enzyme'
chai.use(chaiEnzyme())
// If you want to use spies
import spies from 'chai-spies'
chai.use(spies)
// If you want to use the wrapper (for Material UI, see section on Material UI below)
import wrapper from '../../../test/helpers/wrapper'
// The component you are testing
import { Header } from './Header'
```

A test then might look like this:

```js
const footer = shallow(<Footer />)
// const wrapper(<Footer />) if you need Material UI

describe("<Footer/>", () => {
  it("contains a footer tag with class footer", () => {
    expect(footer).to.have.tagName('footer')
    expect(footer).to.have.className('footer')
  })
})
```

#### Using dynamic props

If you need to change props between test examples, you could wrap them in a function,
like so:

```js
const props = (overrideProps) => {
  return Object.assign({}, {
    user: {},
    logout: chai.spy(),
    navigateTo: chai.spy(),
  }, overrideProps || {})
}
```

Then call use that function to pass down props:

```js
it("does not render the Admin menu", () => {
  const header = wrapper(<Header { ...props() } />)
  expect(header.find('.AdminMenu').length).to.equal(0)
})

it('does render the Admin menu for Admins', () => {
  const header = wrapper(<Header { ...props({adminAvailable: true}) } />)
  expect(header.find('.AdminMenu').length).to.equal(1)
});
```

### Location of test files

To test a component, just create a test file in the same directory, for example:

```
src/components/ui-components/
  Header.js
  Header.test.js
```

This way, we keep everything handy while developing, while Webpack ignores these
files.

### Testing components with Material UI

Testing components that include Material UI components can be a bit painful.
The Material UI components need access to the MuiTheme stuff to render properly,
so we need to wrap the component we test in `<MuiThemeProvider>` components.

We have a wrapper to help you with that, which lives in `test/helpers/wrapper`

Example usage:

```js
import wrapper from '../../../test/helpers/wrapper'
const header = wrapper(<Header { ...props } />)
```

**Note the following**:

  - The wrapper uses Enzyme's `mount` to render the component
  - The root component is `<MuiThemeProvider>`, not the component you are testing
  - You won't have access to your component's state etc, because it's not the root component
  - _You can still pass down props directly to the component you are testing though, thus
    controlling the context in which the component renders._

### Testing Redux connected components

Some components are connected to the Redux store via `react-redux`'s `connect`.
When testing, we don't want that, so make sure you import the class, not the
connected component, in your tests:

```js
// component file

// export the class, but not default
export class Header extends Component {
  // ...
}

// instead, export the connected component by default
export default connect(mapStateToProps, ...)
```

```js
// test file

// Import the { unconnected } component!
import { Header } from './Header'
```

### Screenshots [WIP]
Screenshots of the onboarding flow. 

![ScreenShot](https://cloud.githubusercontent.com/assets/20054414/21008268/42327f84-bd41-11e6-8175-059710119151.png)
![ScreenShot](https://cloud.githubusercontent.com/assets/20054414/21008302/74c14e12-bd41-11e6-918f-e54b9b64f4fa.png)
![ScreenShot](https://cloud.githubusercontent.com/assets/20054414/21008314/816212fa-bd41-11e6-9877-7ec3ff18e6b0.png)
![ScreenShot](https://cloud.githubusercontent.com/assets/20054414/21008320/8b3e24bc-bd41-11e6-9e71-2daf80060d83.png)

------------------

**Student Contributors**: @noraeb • @stefanouweneel • @michfarr • @Jeffrey-Meesters • @tanjahennis • @adrianabm • @Namoneo 
**Codaisseur**: @foxycoder

[codaisseur]: https://www.codaisseur.com
