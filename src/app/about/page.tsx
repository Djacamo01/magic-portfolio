'use client';

import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import { useLanguage } from "@/utils/useLanguage";
import { useNavigation } from "@/utils/useNavigation";
import { ClientPageWrapper } from "@/components/ClientPageWrapper";
import styles from "@/components/about/about.module.scss";
import React from "react";



export default function About() {
  const { content } = useLanguage();
  const { getUrlWithLang } = useNavigation();
  
  // Verificar si el contenido está cargado
  if (!content?.about) {
    return <div>Loading...</div>;
  }
  
  const structure = [
    {
      title: content.about.intro.title,
      display: content.about.intro.display,
      items: [],
    },
    {
      title: content.about.work.title,
      display: content.about.work.display,
      items: content.about.work.experiences.map((experience) => experience.company),
    },
    {
      title: content.about.studies.title,
      display: content.about.studies.display,
      items: content.about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: content.about.technical.title,
      display: content.about.technical.display,
      items: content.about.technical.skills.map((skill) => skill.title),
    },
  ];
  return (
    <ClientPageWrapper 
      title={content.about.title}
      description={content.about.description}
    >
      <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={content.about.title}
        description={content.about.description}
        path={content.about.path}
        image={`/api/og/generate?title=${encodeURIComponent(content.about.title)}`}
        author={{
          name: content.person.name,
          url: `${baseURL}${content.about.path}`,
          image: `${baseURL}${content.person.avatar}`,
        }}
      />
      {(content.about as any)?.tableOfContent?.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={content.about as any} />
        </Column>
      )}
      <Flex fillWidth mobileDirection="column" horizontal="center">
        {(content.about as any)?.avatar?.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={content.person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {content.person.location}
            </Flex>
            {content.person.languages.length > 0 && (
              <Flex wrap gap="8">
                {content.person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {content.about.calendar.display && (
              <Flex
                fitWidth
                border="brand-alpha-medium"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Flex paddingX="8">Schedule a call</Flex>
                <IconButton
                  href={getUrlWithLang(content.about.calendar.link)}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Flex>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {content.person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {content.person.role}
            </Text>
            {social.length > 0 && (
              <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth data-border="rounded">
                {social.map(
                  (item) =>
                    item.link && (
                        <React.Fragment key={item.name}>
                            <Button
                                className="s-flex-hide"
                                key={item.name}
                                href={item.link}
                                prefixIcon={item.icon}
                                label={item.name}
                                size="s"
                                weight="default"
                                variant="secondary"
                            />
                            <IconButton
                                className="s-flex-show"
                                size="l"
                                key={`${item.name}-icon`}
                                href={item.link}
                                icon={item.icon}
                                variant="secondary"
                            />
                        </React.Fragment>
                    ),
                )}
              </Flex>
            )}
          </Column>

          {content.about.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {content.about.intro.description}
            </Column>
          )}

          {content.about.work.display && (
            <>
              <Heading as="h2" id={content.about.work.title} variant="display-strong-s" marginBottom="m">
                {content.about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {content.about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Flex>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map((achievement: JSX.Element, index: number) => (
                        <Text
                          as="li"
                          variant="body-default-m"
                          key={`${experience.company}-${index}`}
                        >
                          {achievement}
                        </Text>
                      ))}
                    </Column>
                    {experience.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {content.about.studies.display && (
            <>
              <Heading as="h2" id={content.about.studies.title} variant="display-strong-s" marginBottom="m">
                {content.about.studies.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {content.about.studies.institutions.map((institution, index) => (
                  <Column key={`${institution.name}-${index}`} fillWidth gap="4">
                    <Text id={institution.name} variant="heading-strong-l">
                      {institution.name}
                    </Text>
                    <Text variant="heading-default-xs" onBackground="neutral-weak">
                      {institution.description}
                    </Text>
                  </Column>
                ))}
              </Column>
            </>
          )}

          {content.about.technical.display && (
            <>
              <Heading
                as="h2"
                id={content.about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {content.about.technical.title}
              </Heading>
              <Column fillWidth gap="l">
                {content.about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">{skill.title}</Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.images && skill.images.length > 0 && (
                      <Flex fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Flex
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            //@ts-ignore
                            minWidth={image.width}
                            //@ts-ignore
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              //@ts-ignore
                              sizes={image.width.toString()}
                              //@ts-ignore
                              alt={image.alt}
                              //@ts-ignore
                              src={image.src}
                            />
                          </Flex>
                        ))}
                      </Flex>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Flex>
    </Column>
    </ClientPageWrapper>
  );
}
