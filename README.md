# Reproduction steps

- clone repo
- run `npm install`
- run `npm test`

# Intent
Overwriting the global class `XmlHttpRequest` with a custom class that allows avoiding internet round trips during tests
and returns values for a specific URL as needed by the tested project

Note: this used to work in the previous installed version jest@25.5.4.

Issue arose as I was migrating to the latest version of jest.

# Expected behavior

`global.XmlHttpRequest` is available as an instantiable class on the `global` object.

# Actual Behavior

The `global` object is not extendable to add custom, usually available constructors. Nor does it implement those regular
properties/methods.

I have tried setting my mocked class with `setupTest.js` and in a `beforeAll`, to no avail.
