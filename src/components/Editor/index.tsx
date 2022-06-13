import React, { useMemo } from "react";
import {
  ContentBlock,
  Editor as DraftJSEditor,
  EditorState,
  RichUtils,
} from "draft-js";
import { BlockStyleControls, InlineStyleControls } from "./StyleButton";
import styles from "./index.module.css";

export function Editor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const editor = React.useRef<null | any>(null);

  function focusEditor() {
    editor.current.focus();
  }

  React.useEffect(() => {
    focusEditor();
  }, []);

  const onChange = (editorState: EditorState) => setEditorState(editorState);

  const toggleBlockType = (blockType: string) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  const getBlockStyle = (block: ContentBlock) => {
    switch (block.getType()) {
      case "blockquote":
        return "RichEditor-blockquote";
      default:
        return null;
    }
  };

  const className = useMemo(() => {
    let cn = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== "unstyled") {
        cn += " RichEditor-hidePlaceholder";
      }
    }
    return cn;
  }, [editorState]);

  return (
    <div onClick={focusEditor} className={styles.wrapper}>
      <BlockStyleControls
        editorState={editorState}
        onToggle={toggleBlockType}
      />
      <InlineStyleControls
        editorState={editorState}
        onToggle={toggleInlineStyle}
      />
      <div className={className} onFocus={focusEditor}>
        <DraftJSEditor
          blockStyleFn={getBlockStyle as any}
          ref={editor}
          editorState={editorState}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
