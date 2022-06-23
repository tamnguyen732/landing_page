const scrollTo = (anchor: string) => {
  const section = document.querySelector(`[data-anchor=${anchor}]`);

  if (section != null) section.scrollIntoView({ behavior: 'smooth', block: 'center' });
};

export default scrollTo;
