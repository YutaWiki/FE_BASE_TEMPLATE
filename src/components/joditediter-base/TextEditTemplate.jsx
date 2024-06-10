import { memo } from "react";
import { Controller } from "react-hook-form";
import { TYPE_MANAGEMENT } from "../../interface/constants/type/Type.const";
// import { useTranslation } from "react-i18next";
import JoditEditor from "jodit-react";
import "./index.css"

// const copyStringToClipboard = function (str) {
//   const el = document.createElement("textarea");
//   el.value = str;
//   el.setAttribute("readonly", "");
//   el.style.position = "absolute";
//   el.style.left = "-9999px";
//   document.body.appendChild(el);
//   el.select();
//   document.execCommand("copy");
//   document.body.removeChild(el);
// };

// const facilityMergeFields = [
//   "FacilityNumber",
//   "FacilityName",
//   "Address",
//   "MapCategory",
//   "Latitude",
//   "Longitude",
//   "ReceivingPlant",
//   "TrunkLine",
//   "SiteElevation"
// ];
// const inspectionMergeFields = [
//   "InspectionCompleteDate",
//   "InspectionEventType"
// ];
// const createOptionGroupElement = (
//   mergeFields,
//   optionGroupLabel
// ) => {
//   const optionGroupElement = document.createElement("optgroup");
//   optionGroupElement.setAttribute("label", optionGroupLabel);
//   mergeFields.forEach((mergeField) => {
//     const optionElement = document.createElement("option");
//     optionElement.setAttribute("class", "merge-field-select-option");
//     optionElement.setAttribute("value", mergeField);
//     optionElement.text = mergeField;
//     optionGroupElement.appendChild(optionElement);
//   });
//   return optionGroupElement;
// };
const buttons = [
  "undo",
  "redo",
  "|",
  "bold",
  "strikethrough",
  "underline",
  "italic",
  "|",
  "superscript",
  "subscript",
  "|",
  "align",
  "|",
  "ul",
  "ol",
  "outdent",
  "indent",
  "|",
  "font",
  "fontsize",
  "brush",
  "paragraph",
  "|",
  "image",
  "link",
  "table",
  "|",
  "hr",
  "eraser",
  "copyformat",
  "|",
  "fullsize",
  "selectall",
  "print",
  "|",
  "source",
  "|",
  // {
  //   name: "insertMergeField",
  //   tooltip: "Insert Merge Field",
  //   iconURL: "images/merge.png",
  //   popup: (
  //     editor,
  //     current,
  //     self,
  //     close
  //   ) => {
  //     function onSelected(e) {
  //       const mergeField = e.target.value;
  //       if (mergeField) {
  //         console.log(mergeField);
  //         editor.selection.insertNode(
  //           editor.create.inside.fromHTML("{{" + mergeField + "}}")
  //         );
  //       }
  //     }
  //     const divElement = editor.create.div("merge-field-popup");

  //     const labelElement = document.createElement("label");
  //     labelElement.setAttribute("class", "merge-field-label");
  //     labelElement.textContent = 'Merge field: ';
  //     divElement.appendChild(labelElement);

  //     const selectElement = document.createElement("select");
  //     selectElement.setAttribute("class", "merge-field-select");
  //     selectElement.appendChild(
  //       createOptionGroupElement(facilityMergeFields, "Facility")
  //     );
  //     selectElement.appendChild(
  //       createOptionGroupElement(inspectionMergeFields, "Inspection")
  //     );
  //     selectElement.addEventListener("change", onSelected);
  //     divElement.appendChild(selectElement);

  //     console.log(divElement);
  //     return divElement;
  //   }
  // },
  // {
  //   name: "copyContent",
  //   tooltip: "Copy HTML to Clipboard",
  //   iconURL: "images/copy.png",
  //   exec: (editor) => {
  //     const html = editor.value;
  //     copyStringToClipboard(html);
  //   }
  // }
];

const editorConfig = {
  readonly: false,
  toolbar: true,
  spellcheck: true,
  language: "en",
  toolbarButtonSize: "medium",
  toolbarAdaptive: false,
  showCharsCounter: true,
  showWordsCounter: true,
  showXPathInStatusbar: false,
  askBeforePasteHTML: false,
  askBeforePasteFromWord: true,
  //defaultActionOnPaste: "insert_clear_html",
  buttons: buttons,
  uploader: {
    insertImageAsBase64URI: true
  },
  // width: 800,
  height: 842
};

const TextEditTemplate = ({
  name,
  mode,
  control,
  ...restProps
}) => {
  
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return (
            <>
              {mode === TYPE_MANAGEMENT.MODE_DETAIL ? (
                <JoditEditor {...field} {...restProps}
                className="bg-transparent" config={{
                  readonly: true,
                  toolbar: false,
                  showCharsCounter: false,
                  showWordsCounter: false,
                  showStatusbar: false,
                  showPoweredBy: false,
                }} />
              ) : (
                <JoditEditor {...field} {...restProps} config={editorConfig} />
              )}
            </>
          );
        }}
      />
    </>
  );
};

export default memo(TextEditTemplate);
