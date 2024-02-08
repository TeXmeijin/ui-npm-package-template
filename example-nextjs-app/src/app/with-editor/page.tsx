import {Editor} from "@/app/with-editor/editor";

type Props = {}

const page = (props: Props) => {
  return (
    <div className={'p-8'}>
      <Editor></Editor>
    </div>
  )
};

export default page;
