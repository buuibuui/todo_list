document.addEventListener('DOMContentLoaded', function() {
   const ul = document.getElementById('ul');
   const addBtn = document.getElementById('add-btn');
   
   addBtn.addEventListener('click', function() {
      const todo = new ToDoList(ul);
   });

});

class ToDoList {
   constructor(ul) {
      this.ul = ul;
      const li = document.createElement('li');
      const check = document.createElement('div');
      const text = document.createElement('p');
      const button = document.createElement('button');
      this.li = li;
      this.check = check;
      this.text = text;
      this.delBtn = button;
      this._setAttr(this._getValue());
      this._addEl(this.ul);
      this._ListEvents();
   }
   _getValue() {
      this.formText = document.getElementById('form-text');
      return this.formText.value;
   }
   _setAttr(txt) {
      this.li.classList.add('list');
      this.check.classList.add('list__check');
      this.text.classList.add('list__text');
      this.text.textContent = txt;
      this.delBtn.classList.add('list__delate');
      this.delBtn.type = 'button';
      this.delBtn.textContent = 'delate';
   }
   _addEl(ul) {
      this.li.appendChild(this.check);
      this.li.appendChild(this.text);
      this.li.appendChild(this.delBtn);
      ul.appendChild(this.li);
      this.formText.value = '';
   }
   _ListEvents() {
      this.delBtn.addEventListener('click', function() {
         this.parentElement.remove();
      });
      this.check.addEventListener('click', function() {
         this.parentElement.classList.add('done');
      });
   }
}