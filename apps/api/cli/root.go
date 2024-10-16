/*
Copyright © 2024 Ellie Kerns ellie@epklabs.com
*/
package cli

import (
	"fmt"
	"os"

	env "api/internal/config"

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
	rootCmd.PersistentFlags().StringVar(&cfgFile, "cfg", "/etc/flexroster/config.yaml", "path to config file (default is /etc/flexroster/config.yaml)")
}

func initConfig() {
	var err error
	if cfgFile == "" {
		fmt.Println("No config file provided, run flexroster init to generate a sample config file")
	}
	Config, err = env.LoadConfig(cfgFile)
	if err != nil {
		cobra.CheckErr(err)
	}
}
