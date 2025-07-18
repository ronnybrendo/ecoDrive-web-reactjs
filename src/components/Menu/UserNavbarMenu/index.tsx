"use client";

import { memo } from "react";
import { Menu, Portal, Avatar, defineStyle, Text } from "@chakra-ui/react";
import { UserNavbarMenuProps } from "types";
import { useAuthContext } from "contexts";
import { useRouter } from "next/navigation";
import { LuLogOut, LuUser, LuServer } from "react-icons/lu";

import { useTranslations } from "next-intl";

const ringCss = defineStyle({
    outlineWidth: "2px",
    outlineColor: "colorPalette.500",
    outlineOffset: "2px",
    outlineStyle: "solid"
});

const UserNavbarMenu = (props: UserNavbarMenuProps) => {
    const user = props.user;
    const { logout } = useAuthContext();
    const router = useRouter();

    const t = useTranslations("NavBar");

    if (user)
        return (
            <Menu.Root
                positioning={{
                    placement: "bottom", // abre para baixo, alinhado à direita

                    gutter: 60 // distância entre o trigger e o menu
                }}
            >
                <Menu.Trigger asChild cursor="pointer" ml="10px">
                    <Avatar.Root css={ringCss} size={"xs"}>
                        <Avatar.Fallback name={user.name} />
                        {/* <Avatar.Image src="https://bit.ly/sage-adebayo" /> */}
                    </Avatar.Root>
                </Menu.Trigger>

                <Portal>
                    <Menu.Positioner left="auto !important" right="10px">
                        <Menu.Content>
                            <Menu.ItemGroup>
                                <Menu.Item value="account" cursor="pointer">
                                    <LuUser />
                                    <Text fontSize={"md"}>{t("myProfile")}</Text>
                                </Menu.Item>
                            </Menu.ItemGroup>

                            <Menu.Separator />

                            <Menu.ItemGroup>
                                <Menu.Item
                                    value="suppliers"
                                    cursor="pointer"
                                    onClick={() => {
                                        router.push("/suppliers");
                                    }}
                                >
                                    <LuServer />
                                    <Text fontSize={"md"}>{t("credentials")}</Text>
                                </Menu.Item>
                            </Menu.ItemGroup>

                            <Menu.Separator />

                            <Menu.ItemGroup>
                                <Menu.Item value="logout" onClick={logout} cursor="pointer">
                                    <LuLogOut />
                                    <Text fontSize={"md"}>{t("logout")}</Text>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        );
    else return <></>;
};

export default memo(UserNavbarMenu);
