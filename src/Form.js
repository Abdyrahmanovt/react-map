import React from 'react';

const Form = () => {
    return (
        <div>
          <form>
              <label>
                  Имя:
                  <input type="text" name='name'/>
              </label>
              <button >Отправить</button>
          </form>
        </div>
    );
};

export default Form;