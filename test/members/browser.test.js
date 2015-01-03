describe('Browser Members', function() {

  describeToHaveX({
    name: 'toHaveHtmlNode',
    whenPresent: function() {
      describe('when member is a DOM reference to an HTML element',
        function() {
          it('should confirm', function() {
            expect({
              memberName: document.createElement('div')
            }).toHaveHtmlNode('memberName');
          });
        });
    }
  });

});
