import {
  CallControls,
  CallingState,
  CallParticipantsList,
  CallStatsButton,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
  useCall,
} from "@stream-io/video-react-sdk";
import { useRouter } from "next/navigation";
import { Users, LayoutGrid, Users2, Settings } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

type CallLayoutType = "grid" | "speaker";

function MeetingRoom() {
  const router = useRouter();
  const [layout, setLayout] = useState<CallLayoutType>("speaker");
  const [showParticipants, setShowParticipants] = useState(false);
  
  const call = useCall();
  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  if (callingState !== CallingState.JOINED) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg font-medium">Joining meeting...</p>
        </div>
      </div>
    );
  }

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker":
      default:
        return <SpeakerLayout participantsBarPosition="bottom" />;
    }
  };

  const handleLeave = async () => {
    await call?.leave();
    router.push("/");
  };

  return (
    <div className="h-screen bg-background text-foreground relative overflow-hidden">
      <div className="flex h-full">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-card">
            <div className="flex items-center gap-4">
              <h1 className="text-lg font-semibold">Meeting Room</h1>
              <div className="text-sm text-muted-foreground">
                Meeting ID: {call?.id}
              </div>
            </div>
            
            {/* Layout Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant={layout === "speaker" ? "default" : "outline"}
                size="sm"
                onClick={() => setLayout("speaker")}
              >
                <Users className="h-4 w-4" />
                Speaker
              </Button>
              <Button
                variant={layout === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setLayout("grid")}
              >
                <LayoutGrid className="h-4 w-4" />
                Grid
              </Button>
              <Button
                variant={showParticipants ? "default" : "outline"}
                size="sm"
                onClick={() => setShowParticipants(!showParticipants)}
              >
                <Users2 className="h-4 w-4" />
                Participants
              </Button>
            </div>
          </div>

          {/* Video Layout */}
          <div className="flex-1 relative">
            <CallLayout />
          </div>

          {/* Controls */}
          <div className="p-4 border-t bg-card">
            <div className="flex items-center justify-center gap-4">
              <CallControls onLeave={handleLeave} />
            </div>
          </div>
        </div>

        {/* Participants Sidebar */}
        {showParticipants && (
          <Card className="w-80 border-l border-t-0 border-r-0 border-b-0 rounded-none">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Participants</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowParticipants(false)}
                >
                  ×
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              <CallParticipantsList onClose={() => setShowParticipants(false)} />
            </div>
          </Card>
        )}
      </div>
      
      {/* Call Stats (optional, positioned fixed) */}
      <div className="absolute top-4 right-4">
        <CallStatsButton />
      </div>
    </div>
  );
}

export default MeetingRoom;
