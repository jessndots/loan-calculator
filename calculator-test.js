
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment(10000, 10, 0.12)).toEqual('$143.47')
  
});


it("should return a result with 2 decimal places", function() {
  expect(roundToTwo(1.005)).toEqual(1.01)
});

/// etc
