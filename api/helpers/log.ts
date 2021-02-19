export default (...args: string[]) => {
  args.forEach((item: string) => {
    console.info(item);
  });
};