// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import {legacy_createStore as createStore } from "redux";
// import {Store as store} from "./store";
// import rootReducer from "./reducers";

// describe("GIVEN a Redux store created from the rootReducer", () => {
//   let store;
//   beforeEach(() => {
//     store = createStore(rootReducer);
//   });

//   describe("WHEN this is passed to Root", () => {
//     let getByLabelText, getByText, container;
//     beforeEach(() => {
//       ({ getByLabelText, getByText, container } = render(
//         <store store={store} />
//       ));
//     });

//     test("THEN there are no todos shown", () => {
//       expect(container).toHaveTextContent(/no todos in your bucket/i);
//     });

    
//   });
// });
