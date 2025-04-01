//Converted with C2C3AddonConverter v1.0.1.0
"use strict";

{
	const SDK = globalThis.SDK;
	
	const PLUGIN_ID = "Rex_CSV";
	const PLUGIN_CATEGORY = "data-and-storage";

	let app = null;

	const PLUGIN_CLASS = SDK.Plugins.Rex_CSV = class Rex_CSV extends SDK.IPluginBase
	{
		constructor()
		{
			super(PLUGIN_ID);
			SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());
			this._info.SetIcon("icon.png", "image/png");
			this._info.SetName(globalThis.lang(".name"));
			this._info.SetDescription(globalThis.lang(".description"));
			this._info.SetCategory(PLUGIN_CATEGORY);
			this._info.SetAuthor("Rex.Rainbow");
			this._info.SetHelpUrl(globalThis.lang(".help-url"));
			this._info.SetIsSingleGlobal(false);
			this._info.SetIsDeprecated(false);
			this._info.SetSupportsEffects(false);
			this._info.SetMustPreDraw(false);
			this._info.SetCanBeBundled(false);

			this._info.SetSupportedRuntimes(["c2","c3"]);

			SDK.Lang.PushContext(".properties");
			this._info.SetProperties([
				new SDK.PluginProperty("text", "delimiter", ","),
				new SDK.PluginProperty("combo", "eval-mode", {initialValue:"no", items:["no","yes"]})
			]);
			SDK.Lang.PopContext();		// .properties
			SDK.Lang.PopContext();
		}
	};
	PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}
