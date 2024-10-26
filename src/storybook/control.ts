type ControlTypes = "text" | undefined;

export const setControlsTypes = (controls: string[], type: ControlTypes) => {
  return controls.reduce<
    Record<
      string,
      {
        control: { type: ControlTypes };
      }
    >
  >((acc, control) => {
    acc[control] = {
      control: { type },
    };

    return acc;
  }, {});
};

export const hideControls = (...controls: string[]) => {
  return setControlsTypes(controls, undefined);
};

export const textControl = {
  type: "text",
};

export const hiddenControl = {
  type: undefined,
};
