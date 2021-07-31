const counters = document.querySelectorAll('.counter');
const speed = 20;
// the lower it is, the faster it should count

counters.forEach(counter => {
  const updateCount = () => {
    // The + sign is not incremet, it makes target which is a string to a number
    const target = +counter.getAttribute('data-target');

    console.log(target);
    const count = +counter.innerText;

    const increment = target / speed;

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 100)
    } else {
      count.innerText = target;
    }
  }

  updateCount();
})