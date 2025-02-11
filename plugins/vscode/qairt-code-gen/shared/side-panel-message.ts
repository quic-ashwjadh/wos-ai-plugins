const sidePanelMessagePrefix = 'side-panel.message';

export enum SidePanelMessageTypes {
  GET_EXTENSION_STATE = `${sidePanelMessagePrefix}.getExtensionState`,
  START_SERVER_CLICK = `${sidePanelMessagePrefix}.startServerClick`,
  STOP_SERVER_CLICK = `${sidePanelMessagePrefix}.stopServerClick`,
  SHOW_SERVER_LOG_CLICK = `${sidePanelMessagePrefix}.showServerLogClick`,
  SHOW_EXTENSION_LOG_CLICK = `${sidePanelMessagePrefix}.showExtensionLogClick`,
  CHECK_CONNECTION_CLICK = `${sidePanelMessagePrefix}.checkConnectionClick`,
  GENERATE_COMPLETION_CLICK = `${sidePanelMessagePrefix}.generateCompletionClick`,
  SETTINGS_CLICK = `${sidePanelMessagePrefix}.settingsClick`,
  MODEL_CHANGE = `${sidePanelMessagePrefix}.modelChange`,
  PROFILE_CHANGE = `${sidePanelMessagePrefix}.profileChange`,
  CUSTOM_PROMPT_CHECKBOX_CHANGE = `${sidePanelMessagePrefix}.customPromptCheckboxChange`,
  CUSTOM_PROMPT_CHANGE = `${sidePanelMessagePrefix}.customPromptChange`,
  EXAMPLE_PROMPT_SELECT = `${sidePanelMessagePrefix}.examplePromptSelect`,
}

export interface ISidePanelMessage<P = unknown> {
  type: SidePanelMessageTypes;
  payload?: P;
}
