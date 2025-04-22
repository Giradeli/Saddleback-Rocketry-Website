import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";

type MailToParams = "subject" | "body" | "cc" | "bcc";

type MailToParamsModel = {
  [key in MailToParams]?: string | undefined;
};

export const ContactForm = () => {
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [params, setParams] = React.useState<MailToParamsModel>({});
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setParams((prev) => ({ ...prev, subject }));
  }, [subject]);

  useEffect(() => {
    setParams((prev) => ({ ...prev, body: message }));
  }, [message]);

  const paramKeys = Array.from(Object.keys(params));

  const queryParams = paramKeys.reduce((prev, curr) => {
    if (Object.entries(params).find(([key]) => key === curr)) {
      const key = curr;
      const val = params[curr as MailToParams];
      if (val) {
        if (!prev) {
          prev += `?${key}=${val}`;
        } else {
          prev += `&${key}=${val}`;
        }
      }
    }
    return prev;
  }, "");

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          paddingBottom: 2,
        }}
      >
        <TextField
          label="Subject"
          onChange={(e) => setSubject(e.currentTarget.value)}
          value={subject}
        />
        <TextField
          multiline
          minRows={5}
          maxRows={15}
          label="Message"
          onChange={(e) => setMessage(e.currentTarget.value)}
          value={message}
        />
      </Box>
      <Button
        startIcon={<SendIcon />}
        onClick={() => linkRef.current?.click()}
        variant="outlined"
      >
        Send Email
      </Button>
      <a
        style={{ display: "none" }}
        ref={linkRef}
        href={"mailto:scrocketry33@gmail.com" + queryParams}
      >
        Send Email
      </a>
    </Box>
  );
};
