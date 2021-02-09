import createHistory from "history/createMemoryHistory";

export const history = createHistory();

export const push = (url) => history.push(url);
