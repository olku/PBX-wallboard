(function($) {
    'use strict';
    const main = {
      // Enter your PBX address as urlStats value.
      // The 'relative' parameter is used to only fetch data since the last reset interval
      // read 'https://axeos.com/knowledgebase/pbx-api/#ACD_Statistics' for more information.
      urlStats: "https://<yourpbxaddress>/apis/pbx/acd/stats?relative=1",
      // Enter your API key here. You can find it in menu 'System Options/Remote API' in your PBX GUI.
      key: "<yourAPIkey>",
      data: null,
      monitor: $('#monitor'),
      thead: `
      <thead>
        <th>Waiting calls</th>
        <th>Longhest hold time</th>
        <th>Answered calls</th>
        <th>Aborted calls</th>
        <th>Free Agents</th>
        <th>Busy Agents</th>
        <th>All Agents</th>
      </thead>`,
      _init: function(){
        main.start();

        // Request new data from the PBX API every 2 seconds
        let counter = setInterval(function(){
                main.start();
        }, 2000);
      },
      start: function(){
              // Run fetch
              main.fetchData();
              if(main.data !== null){
                  main.builder();
              }
            // console.log(main.data);
              
      },

      fetchData: function(){
        let headers = new Headers(),
            auth = 'Basic ' + window.btoa("apiKey:" + main.key);
        headers.append("Accept", "application/json");
        headers.append("Authorization", auth);
          let req = new Request(main.urlStats, {
              method: "GET", // GET or POST, for data since last reset use GET
              headers: headers,
              cache: "no-cache", // default, no-cache, reload, force-cache, only-if-cached
              withCredentials: true
          });
          fetch(req).then(resp => resp.json())
          .then(resp => {
              main.data = resp.queues;
          });
      },
      // Builder
      builder: function(){
        let tables = ``;
        // Start iteration
        main.data.forEach(function (item, i, array) {
            // Calculate how many agents are busy and save that result to a variable
            let busy_agents = item.all_agents - item.free_agents;
            // Start to build the table that will contain the stats data
            let table = `
              <table>
                <caption>${item.name}</caption>
                ${main.thead}
                <tbody>
                    <tr>
                        <th>${item.calls_waiting}</th>
                        <th>${item.longest_hold_time}</th>
                        <th>${item.answered}</th>
                        <th>${item.aborted}</th>
                        <th>${item.free_agents}</th>
                        <th>${busy_agents}</th>
                        <th>${item.all_agents}</th>
                    </tr>
                </tbody>
              </table>`;
              // Insert the table
              tables+= table;
        });
        // Append the content to monitor div
        main.monitor.html(tables);
      }
    };
    // GO GO GADGET
    main._init();
  })(jQuery);
  