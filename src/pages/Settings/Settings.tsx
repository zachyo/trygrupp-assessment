import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import RolesComponent from "./partials/RolesComponent";

const Settings = () => {
  return (
    <div className="text-gray-500">
      <p className="font-medium text-[30px] text-gray-900">Settings</p>
      <p>Manage your team and preferences here.</p>
      <div className="mt-6">
        <Tabs defaultValue="roles" className="">
          <div className="w-full overflow-x-auto text-gray-800">
            <TabsList className="border border-gray-300 overflow-hidden">
              <TabsTrigger value="account">My details</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="plan">Plan</TabsTrigger>
              <TabsTrigger value="roles">Roles</TabsTrigger>
              <TabsTrigger value="notifications">Notiifications</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="api">API</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="roles">
            <RolesComponent />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
