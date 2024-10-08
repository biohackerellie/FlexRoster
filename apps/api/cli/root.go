/*
Copyright © 2024 Ellie Kerns ellie@epklabs.com
*/
package cli

import (
	env "api/internal/config"
	"os"

	"github.com/spf13/cobra"
)

var (
	cfgFile string
	rootCmd = &cobra.Command{
		Use:   "flex",
		Short: "Cli tool for configuring and managing FlexRoster",
		Long:  `Cli tool for configuring and managing FlexRoster`,
	}
	Config *env.Env
)

func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	cobra.OnInitialize(initConfig)
	rootCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
	rootCmd.PersistentFlags().StringVar(&cfgFile, "cfg", "", "path to config file (default is $HOME/.config/flexroster/config.yaml)")
}

func initConfig() {
	var err error
	Config, err = env.LoadConfig(cfgFile)
	if err != nil {
		cobra.CheckErr(err)
	}
}
