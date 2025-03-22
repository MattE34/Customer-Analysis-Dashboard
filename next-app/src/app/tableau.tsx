"use client"; // Marking this file as a client component

import { useEffect, useState } from "react";

const TableauEmbed = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set to true once the component is mounted on the client
  }, []);

  if (!isClient) {
    return null; // Don't render anything on the server side
  }

  return (
    <div
      className="tableauPlaceholder"
      id="viz1742594411631"
      style={{ position: "relative" }}
    >
      <noscript>
        <a href="#">
          <img
            alt="Exec Overview"
            src="https://public.tableau.com/static/images/Su/SuperStoreFinancialInsights/ExecOverview/1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param
          name="name"
          value="SuperStoreFinancialInsights/ExecOverview"
        />{" "}
        {/* Change this to your actual Tableau URL */}
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https://public.tableau.com/static/images/Su/SuperStoreFinancialInsights/ExecOverview/1.png"
        />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
      </object>
      <script type="text/javascript">
        var divElement = document.getElementById('viz1742594411631'); var
        vizElement = divElement.getElementsByTagName('object')[0];
        vizElement.style.width = '1300px'; vizElement.style.height = '977px';
        var scriptElement = document.createElement('script'); scriptElement.src
        = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
      </script>
    </div>
  );
};

export default TableauEmbed;
