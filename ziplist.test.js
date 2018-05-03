/* eslint-env mocha, chai */
/* global ziplist, zipListTheSimpleWay, chai */

describe('ZipList', function () {
  const testList1 = ['a', 'b', 'c'];
  const testList2 = [1, 2, 3];
  describe('ziplist()', function () {
    it('should return array with all elements of testlist1 and testlist2 added alternatingly', function () {
      chai.expect(ziplist(testList1, testList2)).to.be.an('array').that.include('a',1,'b',2,'c',3);
      // include.members() is used if want to ignore duplicates
    });
  });
  describe('zipListTheSimpleWay()', function () {
    it('should return array with all elements of testlist1 and testlist2 added alternatingly', function () {
      chai.expect(zipListTheSimpleWay(testList1, testList2)).to.be.an('array').that.include('a', 1, 'b', 2, 'c', 3);
    });
  });
});
