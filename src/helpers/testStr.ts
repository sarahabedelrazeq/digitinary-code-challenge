export default function testStr(str: string, type: "email"): boolean {
  let patterns: {
    email: RegExp;
  } = {
    email: new RegExp(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    ),
  };

  return Boolean(patterns[type].test(str));
}
