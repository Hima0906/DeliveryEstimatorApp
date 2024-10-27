# DeliveryApp

A React Native app to select products, input pincode, and receive estimated delivery dates.

## Features
- Product selection with stock availability simulation.
- Pincode input and validation.
- Delivery date estimation based on provider.
- Countdown timer for same-day delivery cutoff.

## Setup Instructions
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the app: `npx react-native run-android` or `npx react-native run-ios`

## Assumptions
- Only sample data for products and pincodes.
- Providers assigned based on the starting digit of the pincode.
- Delivery logic as per specified requirements.

## Design Decisions
- Used `moment` for date and time handling.
- Countdown timer implemented as a real-time component.
