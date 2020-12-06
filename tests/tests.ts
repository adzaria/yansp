import dbStart from "./dependencies/dbStart";
import dbClose from "./dependencies/dbClose";
import dbDrop from "./dependencies/dbDrop";

before(dbStart);
beforeEach(dbDrop);
after(dbClose);

/* //////////////////////////////////////////////////////////////////
//                     TESTS I
////////////////////////////////////////////////////////////////////*/
describe("===== Tests I", () => {
  describe("Test 1", () => {});
});
