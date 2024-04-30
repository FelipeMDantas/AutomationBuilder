import { ConnectionsProvider } from "@/providers/connections-provider";
import EditorProvider from "@/providers/editor-provider";

const Page = () => {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <div></div>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
};

export default Page;
