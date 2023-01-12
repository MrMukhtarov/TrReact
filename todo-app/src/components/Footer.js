import React from "react";

function Footer() {
  return (
    <footer className="info">
      <p>Click to edit a todo</p>
      <p>
        Created by{" "}
        <a
          href="https://www.google.com/search?q=golden+retriever&rlz=1C1CHBD_enAZ1008AZ1008&sxsrf=ALiCzsbFc6dRQJRMpnG5MzfvGSI6o4qpaQ%3A1667057793851&ei=gUhdY8a7M-jBxc8PxemXyA4&gs_ssp=eJzj4tTP1TcwLDEwNjJg9BJIz89JSc1TKEotKcpMLUstAgB55wlF&oq=golden+re&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAxgAMgUILhCABDIFCAAQgAQyBQgAEIAEMggIABCABBDLATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoECCMQJzoECAAQQzoLCC4QgAQQxwEQ0QM6CAguEIAEENQCOgoILhDHARDRAxBDOgQILhBDOgsILhCABBDHARCvAToOCC4QgAQQxwEQrwEQ1AI6DgguEIAEEMcBEK8BEMsBSgQITRgBSgQIQRgASgQIRhgAUABYyQhgtA5oAHABeACAAckBiAGnDJIBBTAuOC4xmAEAoAEBwAEB&sclient=gws-wiz-serp"
          style={{ color: "blue" }}
          target='noopener'
        >
          Golden Retriever
        </a>
      </p>
      <p>
        Part of <a href="/">Todo</a>
      </p>
    </footer>
  );
}
export default Footer;
