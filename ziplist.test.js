/* eslint-env mocha, chai */
/* global ziplist, zipListTheSimpleWay, chai */

describe('ZipList', function () {
  const testList1 = ['a', 'b', 'c'];
  const testList2 = [1, 2, 3];
  describe('ziplist()', function () {
    it('should return single array with six elements', function () {
      chai.expect(ziplist(testList1, testList2)).to.have.lengthOf(6);
    });
    it('should return array with all elements of testlist1 and testlist2', function () {
      chai.expect(ziplist(testList1, testList2)).to.be.an('array').that.include('a', 'b', 'c', 1, 2, 3);
      // include.members() is used if want to ignore duplicates
    });
    it('should deeply equal passed 6 elements in alternation', function () {
      chai.expect(ziplist(testList1, testList2)).to.eql(['a', 1, 'b', 2, 'c', 3]);
    });
  });
  describe('zipListTheSimpleWay()', function () {
    it('should return single array with six elements', function () {
      chai.expect(zipListTheSimpleWay(testList1, testList2)).to.have.lengthOf(6);
    });
    it('should return array with all elements of testlist1 and testlist2', function () {
      chai.expect(zipListTheSimpleWay(testList1, testList2)).to.be.an('array').that.include('a', 'b', 'c', 1, 2, 3);
      // include.members() is used if want to ignore duplicates
    });
    it('should deeply equal passed 6 elements in alternation', function () {
      chai.expect(zipListTheSimpleWay(testList1, testList2)).to.eql(['a', 1, 'b', 2, 'c', 3]);
    });
  });
});
