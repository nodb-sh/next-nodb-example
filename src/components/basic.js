export function Flex({ children }) {
  return (
    <div className="flex">
      {children}
    </div>
  );
}

export function FlexCol({ children, styles }) {
  return (
    <div className="flex flex-col w-96" style={{ ...styles }}>
      {children}
    </div>
  );
}

export function FlexFull({ children }) {
  return (
    <div className="flex flex-1 my-1">
      {children}
    </div>
  );
}

export function SpaceBetween({ children }) {
  return (
    <div className="flex justify-between">
      {children}
    </div>
  );
}