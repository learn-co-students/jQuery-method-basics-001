'use-strict';

describe('Methods', function() {
  beforeEach(function() {
    setFixtures('<body><div id="wrapper"><div id="header"><h1>Exploring jQuery Methods</h1></div><!-- end header --><div id="content"><div class="container"><button id="b1">Hide Paragraph</button> <button id="b2">Show Paragraph</button> <button id="b3">Toggle Paragraph</button><p id="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis fringilla augue pellentesque cursus. Integer a placerat sapien. Suspendisse faucibus sodales commodo. Etiam ac accumsan urna. Vestibulum condimentum placerat elit, sit amet commodo est feugiat non. Vivamus eget magna semper nisi iaculis interdum. Phasellus interdum, mauris interdum interdum ornare, eros velit varius augue, at fermentum lorem justo eget metus. Nulla id ligula urna. Nulla nisi velit, sagittis nec mattis non, feugiat sit amet libero. Donec et lectus sed tellus consectetur venenatis. Quisque volutpat sagittis est, eget pellentesque neque elementum non.</p></div><!-- end container --><button id="b4">CSS Property</button> <button id="b5">Multiple CSS Properties</button><p id="p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis fringilla augue pellentesque cursus. Integer a placerat sapien. Suspendisse faucibus sodales commodo. Etiam ac accumsan urna. Vestibulum condimentum placerat elit, sit amet commodo est feugiat non. Vivamus eget magna semper nisi iaculis interdum. Phasellus interdum, mauris interdum interdum ornare, eros velit varius augue, at fermentum lorem justo eget metus. Nulla id ligula urna. Nulla nisi velit, sagittis nec mattis non, feugiat sit amet libero. Donec et lectus sed tellus consectetur venenatis. Quisque volutpat sagittis est, eget pellentesque neque elementum non.</p><button id="b6">Html Text Change</button> <button id="b7">Prepend</button> <button id="b8">Append</button><p id="p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis fringilla augue pellentesque cursus. Integer a placerat sapien. Suspendisse faucibus sodales commodo. Etiam ac accumsan urna. Vestibulum condimentum placerat elit, sit amet commodo est feugiat non. Vivamus eget magna semper nisi iaculis interdum. Phasellus interdum, mauris interdum interdum ornare, eros velit varius augue, at fermentum lorem justo eget metus. Nulla id ligula urna. Nulla nisi velit, sagittis nec mattis non, feugiat sit amet libero. Donec et lectus sed tellus consectetur venenatis. Quisque volutpat sagittis est, eget pellentesque neque elementum non.</p><button id="b9">Before Element</button> <button id="b10">After Element</button><p id="p4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis fringilla augue pellentesque cursus. Integer a placerat sapien. Suspendisse faucibus sodales commodo. Etiam ac accumsan urna. Vestibulum condimentum placerat elit, sit amet commodo est feugiat non. Vivamus eget magna semper nisi iaculis interdum. Phasellus interdum, mauris interdum interdum ornare, eros velit varius augue, at fermentum lorem justo eget metus. Nulla id ligula urna. Nulla nisi velit, sagittis nec mattis non, feugiat sit amet libero. Donec et lectus sed tellus consectetur venenatis. Quisque volutpat sagittis est, eget pellentesque neque elementum non.</p><button id="b11">Wrap with Element</button> <button id="b12">Add CSS Class</button><p id="p5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis fringilla augue pellentesque cursus. Integer a placerat sapien. Suspendisse faucibus sodales commodo. Etiam ac accumsan urna. Vestibulum condimentum placerat elit, sit amet commodo est feugiat non. Vivamus eget magna semper nisi iaculis interdum. Phasellus interdum, mauris interdum interdum ornare, eros velit varius augue, at fermentum lorem justo eget metus. Nulla id ligula urna. Nulla nisi velit, sagittis nec mattis non, feugiat sit amet libero. Donec et lectus sed tellus consectetur venenatis. Quisque volutpat sagittis est, eget pellentesque neque elementum non.</p><button id="b13">Clone an Element</button><ul><li>Clone Me !</li></ul><div class="container"><button id="b14">Fade Out</button> <button id="b15">Fade In</button> <button id="b16">Fade Toggle</button><p id="p6"><img src="images/cat.jpg" width="200px" height="auto" alt="cat sleeping"/><br />Sleeping Kitty zzzzzZZZZ...</p></div><!-- end container --><br><div class="container"><button id="b17">Slide Up</button> <button id="b18">Slide Down</button><br /><br /><div class="box-header">Click Me to Toggle</div><div class="box-content">Contents inside a box.</div></div><!-- end container --><button id="b19">Animate</button><div class="container"><div class="box-animate">Animated box here</div></div><!-- end container --></div></div></body>');
      clickListeners();
  });

  describe('#b1 button', function() {
    
    it('should hide the paragraph when Hide Paragraph is clicked', function() {
      $("#b1").click();
      selector = $('#p1');
      expect(selector.css('display')).toBe("none");
    });
  });

  describe('#b2 button', function() { 
    it('should show the paragraph when Show Paragraph is clicked', function() {
      $("#b1").click();
      $("#b2").click();
      selector = $('#p1');
      expect(selector.css('display')).toBe("block");
    });
  });

  describe('#b3 button', function() { 
    it('should toggle the paragraph when Toggle Paragraph is clicked', function() {
      $("#b1").click();
      $("#b3").click();
      selector = $('#p1');
      expect(selector.css('display')).toBe("block");
    });
  });  

  describe('#b4 button', function() { 
    it('should change the background color when CSS Property button is clicked', function() {
      $("#b4").click();
      selector = $('#p2');
      expect(selector.css('background-color')).toBe("rgb(204, 204, 204)");
    });
  });

  describe('#b5 button', function() { 
    it('should change multiple background properties when Multiple CSS Properties button is clicked', function() {
      $("#b5").click();
      selector = $('#p2');
      expect(selector.css('background-color')).toBe("rgb(0, 0, 255)");
      expect(selector.css('color')).toBe("rgb(255, 255, 255)");
      expect(selector.css('padding')).toBe("5px");
    });
  });

  describe('#b6 button', function() { 
    it('change the html to "change html text to this!" when HTML Text Change is clicked', function() {
      $("#b6").click();
      selector = $('#p3');
      expect(selector.text()).toBe("change html text to this!");
    });
  });

  describe('#b7 button', function() { 
    it('should prepend the word "Before" when Prepend button is clicked', function() {
      $("#b7").click();
      selector = $('#p3');
      expect(selector.text()).toBe("Before Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis fringilla augue pellentesque cursus. Integer a placerat sapien. Suspendisse faucibus sodales commodo. Etiam ac accumsan urna. Vestibulum condimentum placerat elit, sit amet commodo est feugiat non. Vivamus eget magna semper nisi iaculis interdum. Phasellus interdum, mauris interdum interdum ornare, eros velit varius augue, at fermentum lorem justo eget metus. Nulla id ligula urna. Nulla nisi velit, sagittis nec mattis non, feugiat sit amet libero. Donec et lectus sed tellus consectetur venenatis. Quisque volutpat sagittis est, eget pellentesque neque elementum non.");
    });
  });

  describe('#b8 button', function() { 
    it('should prepend the word "Before" when Prepend button is clicked', function() {
      $("#b8").click();
      selector = $('#p3');
      expect(selector.text()).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at felis fringilla augue pellentesque cursus. Integer a placerat sapien. Suspendisse faucibus sodales commodo. Etiam ac accumsan urna. Vestibulum condimentum placerat elit, sit amet commodo est feugiat non. Vivamus eget magna semper nisi iaculis interdum. Phasellus interdum, mauris interdum interdum ornare, eros velit varius augue, at fermentum lorem justo eget metus. Nulla id ligula urna. Nulla nisi velit, sagittis nec mattis non, feugiat sit amet libero. Donec et lectus sed tellus consectetur venenatis. Quisque volutpat sagittis est, eget pellentesque neque elementum non. After");
    });
  });

  describe('#b9 button', function() { 
    it('should place the <h3> tag and content before #p4 when Before button is clicked', function() {
      $("#b9").click();
      selector = $('#content');
      html = '<h3>Before E</h3><p id="p4">'
      expect(selector.html()).toContain(html);
    });
  });

  describe('#b10 button', function() { 
    it('should place the <h3> tag and content after #p4 when After button is clicked', function() {
      $("#b10").click();
      selector = $('#content');
      html = '<h3>After E</h3><button id="b11">'
      expect(selector.html()).toContain(html);
    });
  });

  describe('#b11 button', function() { 
    it('should wrap the #p5 element with a div with a class of "pinky" when Wrap with Element button is clicked', function() {
      $("#b11").click();
      selector = $('.pinky');
      expect(selector).toContainElement($('#p5'));
    });
  });


  describe('#b12 button', function() { 
    it('adds class of "text" to #p5 when Add CSS Class button is clicked', function() {
      $("#b12").click();
      selector = $('#p5');
      expect(selector).toHaveAttr('class', 'texty');
    });
  });

  describe('#b13 button', function() { 
    it('should display two Clone Me ! list items when Clone an Element button is clicked', function() {
      $("#b13").click();
      selector = $('ul');
      expect($(selector[1]).text()).toBe('Clone Me !Clone Me !');
    });
  });

  describe('#b14 button', function() { 
    beforeEach(function(done) {
      $("#b14").click();
      selector = $('#p6');
      setTimeout(function() {
        done();
      }, 1000)
    });

    it('should fade out element when Fade Out button is clicked', function() {
      expect(selector.css('display')).toBe("none");
    });
  });

  describe('#b15 button', function() { 
    beforeEach(function(done) {
      $('#p6').css('display', 'none');
      $("#b15").click();
      selector = $('#p6');
      setTimeout(function() {
        done();
      }, 1000)
    });

    it('should fade in element when Fade In button is clicked', function() {
      expect(selector.css('display')).toBe("block");
    });
  });

  describe('#b16 button', function() { 
    beforeEach(function(done) {
      $('#p6').css('display', 'none');
      $("#b16").click();
      selector = $('#p6');
      setTimeout(function() {
        done();
      }, 1000)
    });

    it('should fade in element when Fade Toggle button is clicked if it is not visible', function() {
      expect(selector.css('display')).toBe("block");
    });
  });

  describe('#b17 button', function() { 
    beforeEach(function(done) {
      $("#b17").click();
      selector = $('.box-content');
      setTimeout(function() {
        done();
      }, 1000)
    });

    it('should slide up content when Slide Up button is clicked', function() {
      expect(selector.css('display')).toBe("none");
    });
  });

  describe('#b18 button', function() { 
    beforeEach(function(done) {
      $('.box-content').css('display', 'none');
      $("#b18").click();
      selector = $('.box-content');
      setTimeout(function() {
        done();
      }, 1000)
    });

    it('should slide down content when Slide Down button is clicked', function() {
      expect(selector.css('display')).toBe("block");
    });
  });

  describe('.box-header button', function() { 
    beforeEach(function(done) {
      $('.box-content').css('display', 'none');
      $(".box-header").click();
      selector = $('.box-content');
      setTimeout(function() {
        done();
      }, 1000)
    });

    it('should slide down content when Click Me to Toggle button is clicked when content is not visible', function() {
      expect(selector.css('display')).toBe("block");
    });
  });

});

