export default function (params = {}) {
    /*let {currentElement, currentElementParent} = params;

     if (currentElementParent && pageWidth && pageHeight) {
     paragraphHeight = this._getElementHeight(currentElementParent, {
     width: pageWidth
     });

     // divide into several parts
     if (paragraphHeight > pageHeight) {
     parts = [];
     children = currentElementParent.children;
     count = children.length;
     beforePartHeight = pageContentHeight;
     i = 0;

     while (count) {
     parts[i] = copy({}, currentElementParent, {
     children: []
     });
     partHeight = 0;

     while (partHeight < pageHeight) {
     el = children.shift();
     parts[i].children.push(el);
     count--;

     h = this._getElementHeight(parts[i], {
     width: pageWidth
     });

     if (beforePartHeight + h > pageHeight || h > pageHeight) {
     el = parts[i].children.pop();
     children.unshift(el);
     count++;
     break;
     }

     partHeight = beforePartHeight + h;

     if (!count) {
     break;
     }
     }

     if (!beforePartHeight) {
     this._createNewPage(params = {});
     }

     parseResult.pages[currentPageIndex].children[currentElementIndex] =
     parts[i];

     i++;
     beforePartHeight = 0;
     currentElementIndex++;
     }

     if (i) {
     currentElementIndex--;
     }

     if (partHeight < pageHeight) {
     paragraphHeight = partHeight;
     } else {
     paragraphHeight = 0;
     }
     } else if (pageContentHeight + paragraphHeight > pageHeight) {
     this._createNewPage(params = {});
     currentElementIndex++;
     parseResult.pages[currentPageIndex].children[currentElementIndex] =
     currentElementParent;
     currentElementIndex--;
     }

     pageContentHeight += paragraphHeight;
     }

     currentElementIndex++;

     currentElementParent = copy({}, paragraphData, {
     children: []
     });

     parseResult.pages[currentPageIndex].children[currentElementIndex] =
     currentElementParent;

     currentElement = {
     options: {},
     css: {},
     style: {},
     properties: {
     textContent: ''
     }
     };*/

    return params;
}