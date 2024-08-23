import SideBar from "./sideBar";
import ChatArea from "./chatArea";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function ResizableDemo() {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={25}>
        <div>
          <SideBar />
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div>
          <ChatArea/>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
