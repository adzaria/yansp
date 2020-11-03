import {testDropDb} from "./dependencies/testDropDb";
import {testCloseDb} from "./dependencies/testCloseDb";
import {testStartDb} from "./dependencies/testStartDb";

before(testStartDb);
beforeEach(testDropDb);
after(testCloseDb);

describe("This is a test-category", () => {
  describe("This is a test", () => {});
});
