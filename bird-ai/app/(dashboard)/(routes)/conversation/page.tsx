import { Heading } from "@/components/Heading";
import { MessageSquare } from "lucide-react";

const ConversationPage = () => {
    return (
        <div>
          <Heading 
           title="Conversation"
           description="Our AI ChatBot"
           icon={MessageSquare}
           iconColor="text-violet-500"
           bgColor="bg-violet-500/10"
          />
          <div className="px-4 lg:px-8">
            
          </div>
        </div>
    );
}

export default ConversationPage;