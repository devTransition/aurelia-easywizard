System.register([], function (_export) {
  "use strict";

  var LinkData, StepList;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  return {
    setters: [],
    execute: function () {
      LinkData = (function () {
        function LinkData(prev) {
          _classCallCheck(this, LinkData);

          this.prev = prev;
        }

        LinkData.prototype.isFirst = function isFirst() {
          return this.prev == undefined;
        };

        LinkData.prototype.isLast = function isLast() {
          return this.next == undefined;
        };

        return LinkData;
      })();

      StepList = (function () {
        function StepList() {
          _classCallCheck(this, StepList);

          this.list = new WeakSet();
          this.linkData = new WeakMap();
        }

        StepList.prototype.add = function add(data) {
          var lastLinkData = undefined;
          var prev = this.last || this.first;
          if (prev) {
            lastLinkData = this.linkData.get(prev);
          }
          if (!this.first) {
            this.first = data;
          }
          if (lastLinkData) {
            lastLinkData.next = data;
          }
          this.last = data;
          this.list.add(this.last);
          this.linkData.set(this.last, new LinkData(prev));
        };

        StepList.prototype.prev = function prev(data) {
          var linkData = this.linkData.get(data);
          if (linkData) {
            return linkData.prev;
          }
        };

        StepList.prototype.next = function next(data) {
          var linkData = this.linkData.get(data);
          if (linkData) {
            return linkData.next;
          }
        };

        return StepList;
      })();

      _export("StepList", StepList);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBTSxRQUFRLEVBYUQsUUFBUTs7Ozs7OztBQWJmLGNBQVE7QUFHRCxpQkFIUCxRQUFRLENBR0EsSUFBSSxFQUFFO2dDQUhkLFFBQVE7O0FBSVYsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7U0FDakI7O0FBTEcsZ0JBQVEsV0FNWixPQUFPLEdBQUEsbUJBQUc7QUFDUixpQkFBTyxJQUFJLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQTtTQUM5Qjs7QUFSRyxnQkFBUSxXQVNaLE1BQU0sR0FBQSxrQkFBRztBQUNQLGlCQUFPLElBQUksQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFBO1NBQzlCOztlQVhHLFFBQVE7OztBQWFELGNBQVE7QUFHUixpQkFIQSxRQUFRLEdBR0w7Z0NBSEgsUUFBUTs7QUFJakIsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFBO0FBQ3pCLGNBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQTtTQUM5Qjs7QUFOVSxnQkFBUSxXQU9uQixHQUFHLEdBQUEsYUFBQyxJQUFJLEVBQUU7QUFDUixjQUFJLFlBQVksWUFBQSxDQUFBO0FBQ2hCLGNBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQTtBQUNsQyxjQUFJLElBQUksRUFBRTtBQUNSLHdCQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7V0FDdkM7QUFDRCxjQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNkLGdCQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtXQUNsQjtBQUNELGNBQUksWUFBWSxFQUFFO0FBQ2hCLHdCQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtXQUN6QjtBQUNELGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO0FBQ2hCLGNBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN4QixjQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFHLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7U0FDbEQ7O0FBdEJVLGdCQUFRLFdBdUJuQixJQUFJLEdBQUEsY0FBQyxJQUFJLEVBQUU7QUFDVCxjQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUN0QyxjQUFJLFFBQVEsRUFBRTtBQUNaLG1CQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUE7V0FDckI7U0FDRjs7QUE1QlUsZ0JBQVEsV0E2Qm5CLElBQUksR0FBQSxjQUFDLElBQUksRUFBRTtBQUNULGNBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3RDLGNBQUksUUFBUSxFQUFFO0FBQ1osbUJBQU8sUUFBUSxDQUFDLElBQUksQ0FBQTtXQUNyQjtTQUNGOztlQWxDVSxRQUFRIiwiZmlsZSI6InN0ZXAtbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIuLi9saWIvIn0=