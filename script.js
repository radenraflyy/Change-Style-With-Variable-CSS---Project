const inputs = document.querySelectorAll('.controls input')

function handleChange () {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(change => change.addEventListener('change', handleChange))
inputs.forEach(change => change.addEventListener('mousemove', handleChange))
