import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
// the component to test
import Libray from "../index";
import { books } from "./mocks";
import { renderWithRedux } from "../../../helpers";
import store from "../../../store";

const allBooksApi = "https://henri-potier.techx.fr/books";
const server = setupServer(
  rest.get(allBooksApi, (req, res, ctx) => {
    return res(ctx.status(500));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("It should show no data", async () => {
  renderWithRedux(<Libray />, store);
  await waitFor(() => screen.getByRole("books"));

  expect(screen.getByRole("books")).toHaveDescription("");
});
