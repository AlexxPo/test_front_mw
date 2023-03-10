const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [32, 186],
    connect: true,
    step: 1,
    range: {
      'min': [1],
      'max': [300]
    }
  });

  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });

};

const rangeSlider1 = document.getElementById('range-slider1');

if (rangeSlider1) {
  noUiSlider.create(rangeSlider1, {
    start: [1.5, 17.5],
    connect: true,
    step: .1,
    range: {
      'min': [0],
      'max': [20]
    },
    format: wNumb({
      decimals: 1,
    })
  });

  const input2 = document.getElementById('input-2');
  const input3 = document.getElementById('input-3');
  const inputsPrice = [input2, input3];

  rangeSlider1.noUiSlider.on('update', function (values, handle) {
    inputsPrice[handle].value = (values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    rangeSlider1.noUiSlider.set(arr);
  };

  inputsPrice.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
};